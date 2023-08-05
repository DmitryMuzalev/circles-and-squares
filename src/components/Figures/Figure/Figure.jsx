import classes from './Figure.module.scss';

function Figure({ form, dark, color }) {
  form = ['square', 'circle'].includes(form) ? form : 'square';
  color = ['yellow', 'blue', 'red', 'green'].includes(color) ? color : 'red';
  const background = `var(--${color}-${dark ? 'dark' : 'light'})`;

  return (
    <div
      style={{
        backgroundColor: background,
        borderRadius: form === 'circle' ? '50%' : '0%',
      }}
      className={classes.figure}
    ></div>
  );
}

export { Figure };
