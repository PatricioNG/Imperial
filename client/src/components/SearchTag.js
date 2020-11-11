import searchIcon from '../assets/icons/searchIcon.svg';
import { Link } from 'react-router-dom';

export default function SearchTag({ tag }) {

    return (
        <Link className="search-tag" to={`/search?term=${tag.searchQuery}`}>
            <img className="search-tag__icon" src={searchIcon} alt="" />
            <p className="search-tag__tag-text">{tag.term}</p>
        </Link>
    )
}