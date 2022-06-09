const Navbar = ({theme,onButtonClick}) => {
    return <div className="p-4 flex justify-between">
        <a className="text-slate-700 dark:text-slate-200">Home</a>
        <button onClick={onButtonClick}>{theme === 'dark' ? '🌙' : '🌞'}</button>
    </div>
}

export default Navbar;