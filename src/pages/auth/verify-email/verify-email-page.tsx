import Button from '@/components/ui/button';
import Hyperlink from '@/components/ui/hyperlink';
import { APP_ROUTES_CONFIG } from '@/configs/app-routes';
import { Language } from '@/enums/language.enum';
import { formatDateTime } from '@/functions/format-date';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { AuthClient } from '@/services/api-clients/auth-client';
import { ToastService } from '@/services/toast-service';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router';

const SEARCH_PARAMS = {
  USER_ID: 'userId',
  SECRET: 'secret',
  EXPIRE: 'expire',
};

const VerifyEmailPage = () => {
  const authClient = AuthClient.getInstance();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userId = search.get(SEARCH_PARAMS.USER_ID);
  const secret = search.get(SEARCH_PARAMS.SECRET);
  const expire = search.get(SEARCH_PARAMS.EXPIRE);

  const expireDate: string | null = useMemo(
    () => (expire ? formatDateTime(new Date(expire), Language.pl) : null),
    [expire],
  );

  const submitHandler = async (): Promise<void> => {
    setIsSubmitting(true);

    console.log(userId, secret, expire);

    if (!userId || !secret || !expire) {
      ToastService.error(t('VerifyEmailPage.Verification'), t('VerifyEmailPage.Invalid link'));
      setIsSubmitting(false);
      return;
    }

    const result = await authClient.completeVerification(userId, secret);

    if (result.error) {
      ToastService.error(
        t('VerifyEmailPage.Verification'),
        t('VerifyEmailPage.Something went wrong. Please try again'),
      );
      setIsSubmitting(false);
      return;
    }

    await navigate(APP_ROUTES_CONFIG.default);
    ToastService.success(
      t('VerifyEmailPage.Verification'),
      t('VerifyEmailPage.You have successfully verified your account'),
    );
    setIsSubmitting(false);
  };

  return (
    <AuthLayout
      className='grid place-items-center'
      title={t('VerifyEmailPage.Click the button below to verify your account')}
    >
      <div className='flex h-full w-full flex-col place-content-center gap-4 text-center text-sm text-zinc-400'>
        <p>{t("VerifyEmailPage.You're almost there! Tap the button below to complete your verification")}</p>
        <p className='text-zinc-50'>
          {t('VerifyEmailPage.Your verification link will expire on')}:{' '}
          <Hyperlink iconVisibility={false} variant='primary'>
            {expireDate}
          </Hyperlink>
        </p>
        <div className='flex justify-center'>
          <Button variant='primary' loading={isSubmitting} onClick={submitHandler}>
            {t('VerifyEmailPage.Verify')}
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};
export default VerifyEmailPage;
