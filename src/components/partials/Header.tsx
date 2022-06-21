import Logo from '@/components/shared/Logo'
import { MENU } from '@/constants';
import useAudio from '@/hooks/useAudio'
import classNames from 'classnames';

const Header = () => {
    const [playing, toggle] = useAudio('/audio-genshin-impact.mp3');
    return (
        <div className='px-12 tablet:px-4 h-20 w-full fixed top-0 left-0 right-0 text-white z-50 flex items-center justify-between'>
            {/* Logo */}
            {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
            <Logo className='w-[150px] h-[50px] mobile:w-[100px] mobile:h-[40px]' />
            {/* Menu */}
            <ul className='flex items-center'>
                {
                    MENU.map((menu) => (
                        <li className={classNames(
                            'mx-4 text-md relative',
                            menu.subMenu && 'active'
                        )}>
                            <span>{menu.page}</span>
                            {
                                !menu.subMenu ? null :
                                <ul className='active--hi absolute hidden'>
                                    {menu.subMenu.map(item => (
                                        <li>{item.page}</li>
                                    ))}
                                </ul>
                            }
                        </li>
                    ))
                }
            </ul>
            <div>tools</div>
        </div>
    )
}

export default Header