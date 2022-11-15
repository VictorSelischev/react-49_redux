import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
      </section>
    </header>
  );
};
