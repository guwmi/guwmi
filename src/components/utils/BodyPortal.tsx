// import library functionality
import { useEffect, useState, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

export default function BodyPortal(props: PropsWithChildren) {
  const { children } = props;
  const [hasDocument, setHasDocument] = useState<boolean>(false);

  useEffect(() => {
    setHasDocument((typeof document !== 'undefined'));
  }, [])

  return hasDocument ? ReactDOM.createPortal(children, document.body) : null;
}