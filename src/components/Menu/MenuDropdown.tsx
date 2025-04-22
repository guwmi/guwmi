// import library functionality
import React, {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  PropsWithChildren
} from 'react'

// import context
import MenuContext from './MenuContext';

export default function MenuDropdown(props: PropsWithChildren) {

  const { children } = props;
  const { isOpen } = useContext(MenuContext);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const classes = useMemo(() => `guwmi-menu-dropdown${isOpen ? ' open' : ''}`, [isOpen]);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dropDownRef.current?.addEventListener('transitioncancel', () => {
      console.log('menu gone')
      setIsAnimating(false);
    });
    dropDownRef.current?.addEventListener('transitionend', () => {
      console.log('menu gone')
      setIsAnimating(false);
    });
  }, [dropDownRef.current]);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen])

  return (
    <>
      {(isOpen || isAnimating) &&
        <nav className={classes} ref={dropDownRef}>
          <ul>
            {children}
          </ul>
        </nav>
      }
    </>
  )
}