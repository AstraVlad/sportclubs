import exitIcon from '../img/exitIcon.svg';

export default function PageHeader() {
    return (
        <div className='Header'>
            <img className='Exit' src={exitIcon} />
        </div>
    )
}