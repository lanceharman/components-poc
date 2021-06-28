import styles from './mock.module.css';
import {Button} from '@components-poc/button';

/* eslint-disable-next-line */
export interface MockProps {
  copy: string
  children: JSX.Element
}

export function Mock(props: MockProps) {
  return (
    <div className={styles.mock}>
      just a test: {props.copy}
      <br/>
      <Button />
      <br/>
      {props.children}
    </div>
  );
}

export default Mock;
