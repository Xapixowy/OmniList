import Hyperlink from '@/components/ui/hyperlink';
import { useAuthenticationContext } from '@/contexts/authentication';
import { cn } from '@/functions/cn';
import { findParrentElementWithDataAttribute } from '@/functions/find-parent-element-with-data-attribute';
import { AuthClient } from '@/services/api-clients/auth-client';
import { ToastService } from '@/services/toast-service';
import { Models } from 'appwrite';
import { t } from 'i18next';
import { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { TbLogout } from 'react-icons/tb';
import { UserMenuItem } from '../types/user-menu-item';

const USER_MENU_DATA_ATTRIBUTE = 'user-menu';

type UserMenuProps = {
  user: Models.User<Models.Preferences>;
  menuItems: UserMenuItem[];
};

const UserMenu = ({ user, menuItems }: UserMenuProps) => {
  const authClient = AuthClient.getInstance();

  const { setIsLoggedIn, setUser } = useAuthenticationContext();

  const [isOpen, setIsOpen] = useState(false);

  const attributes: Record<string, boolean | string> = useMemo(
    () => ({
      [`data-${USER_MENU_DATA_ATTRIBUTE}`]: isOpen,
    }),
    [isOpen],
  );

  const userInitials: string = useMemo(() => {
    if (!user.name) {
      return user.email.split('@')[0].toUpperCase();
    }

    return user.name
      .split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase();
  }, [user]);

  const handleClickOutside = (e: MouseEvent): void => {
    const element = findParrentElementWithDataAttribute(e.target as HTMLElement, USER_MENU_DATA_ATTRIBUTE);

    if (element !== null) {
      return;
    }

    setIsOpen(false);
  };

  const handleButtonClick = (): void => {
    setIsOpen((prevValue) => !prevValue);
  };

  const handleMenuItemClick =
    (callback: () => void): MouseEventHandler<HTMLAnchorElement> =>
    (): void => {
      setIsOpen(false);
      callback();
    };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = async (): Promise<void> => {
    setIsOpen(false);

    const result = await authClient.logout();

    if (result.error) {
      ToastService.error(t('HomeLayout.Logout'), t('HomeLayout.Something went wrong. Please try again'));
      return;
    }

    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className='group relative hidden sm:block' {...attributes}>
      <button
        className='aspect-square h-10 cursor-pointer rounded-full bg-zinc-100 text-2xl font-semibold text-zinc-950 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700'
        onClick={handleButtonClick}
      >
        {userInitials}
      </button>
      <ul
        className={cn(
          'absolute right-0 bottom-0 z-999 flex w-40 translate-y-[calc(100%+1rem)] flex-col gap-4 rounded-md bg-zinc-950/80 p-4 text-left text-sm',
          {
            hidden: !isOpen,
          },
        )}
      >
        {menuItems.map(({ id, title, to, onClick, icon: Icon }) => (
          <li key={id}>
            <Hyperlink
              className='flex h-full w-full items-center gap-2 hover:no-underline'
              to={to}
              onClick={onClick && handleMenuItemClick(onClick)}
            >
              {<Icon className='text-xl' />}
              {title}
            </Hyperlink>
          </li>
        ))}
        <li className='h-px bg-zinc-400'></li>
        <li>
          <Hyperlink className='flex items-center gap-2 hover:no-underline' onClick={handleLogout}>
            {<TbLogout className='text-xl' />}
            {t('HomeLayout.Logout')}
          </Hyperlink>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
