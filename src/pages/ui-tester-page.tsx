import Button from '../components/ui/button';

const UiTesterPage = () => {
  return (
    <>
      <div className='flex flex-col gap-4 p-4'>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Paragraph</p>
      </div>
      <div className='flex flex-col gap-4 p-4'>
        <div className='flex gap-4'>
          <Button>Default</Button>
          <Button disabled>Default</Button>
          <Button loading>Default</Button>
        </div>
        <div className='flex gap-4'>
          <Button variant='primary'>Primary</Button>
          <Button variant='primary' disabled>
            Primary
          </Button>
          <Button variant='primary' loading>
            Primary
          </Button>
        </div>
        <div className='flex gap-4'>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='secondary' disabled>
            Secondary
          </Button>
          <Button variant='secondary' loading>
            Secondary
          </Button>
        </div>
        <div className='flex gap-4'>
          <Button variant='success'>Success</Button>
          <Button variant='success' disabled>
            Success
          </Button>
          <Button variant='success' loading>
            Success
          </Button>
        </div>
        <div className='flex gap-4'>
          <Button variant='warning'>Warning</Button>
          <Button variant='warning' disabled>
            Warning
          </Button>
          <Button variant='warning' loading>
            Warning
          </Button>
        </div>
        <div className='flex gap-4'>
          <Button variant='danger'>Danger</Button>
          <Button variant='danger' disabled>
            Danger
          </Button>
          <Button variant='danger' loading>
            Danger
          </Button>
        </div>
      </div>
    </>
  );
};
export default UiTesterPage;
