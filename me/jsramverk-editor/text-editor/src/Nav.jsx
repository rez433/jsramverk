const Nav = ({ prnt }) => {
    return (
        <nav>
            <ul>
                <li className="btn btn-primary" onClick={prnt}>
                    Save
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
