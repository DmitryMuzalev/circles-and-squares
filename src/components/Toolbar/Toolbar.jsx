import { ColumnCount } from '../ColumnCount/ColumnCount';
import { Filter } from '../Filter/Filter';

function Toolbar() {
  return (
    <>
      <div>
        <Filter name="colors" type={'check'} />
      </div>
      <div>
        <Filter name="brightness" type={'radio'} />
      </div>
      <ColumnCount />
    </>
  );
}
export { Toolbar };
