import classes from './Figure.module.scss';

function Figure({ form, dark, color }) {
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
