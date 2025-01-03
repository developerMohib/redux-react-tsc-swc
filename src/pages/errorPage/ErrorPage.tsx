import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Button>Home</Button>
        </div>
    );
};

export default ErrorPage;