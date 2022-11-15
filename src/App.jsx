import { IconBrandGoogle, IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
import Button from './components/Button';

const App = () => {
    const type = 'button';
    const onClick = () => window.alert('Hello Login');

    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className={'flex gap-x-3'}>
                <Button className={'bg-pink-700'} {...{ type, onClick }}>
                    <IconBrandGoogle />
                    Login
                </Button>

                <Button className={'bg-blue-900'} {...{ onClick }}>
                    <IconBrandFacebook />
                    Login
                </Button>

                <Button className={'bg-blue-700'} {...{ type, onClick }}>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button className={'bg-slate-600'} {...{ type, onClick }}>
                    <IconBrandGithub />
                    Login
                </Button>
            </div>
        </div>
    );
};

export default App;