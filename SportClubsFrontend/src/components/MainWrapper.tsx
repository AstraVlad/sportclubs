import PageHeader from './PageHeader';
import NavBar from './NavBar';
import './MainWrapper.css';

interface WrapperProps {
    children: any
}

export default function MainWrapper({ children }: WrapperProps) {
    return (
        <div className='Wrapper'>
            <PageHeader />
            <NavBar />
            {children}
        </div>
    )
}