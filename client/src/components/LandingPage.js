import bb8 from '../assets/icons/bb8.svg';
import SearchTag from './SearchTag';
import { Link } from 'react-router-dom';

export default function LandingPage({ handleClick }) {

    const popularSearches = [
        {
            term: 'Sith',
            searchQuery: 'sith'
        },
        {
            term: 'Jakku',
            searchQuery: 'jakku'
        },
        {
            term: 'Stormtrooper Corps',
            searchQuery: 'stormtrooper+corps'
        },
        {
            term: 'Sith',
            searchQuery: 'sith'
        },
        {
            term: 'Jakku',
            searchQuery: 'jakku'
        },
        {
            term: 'Stormtrooper Corps',
            searchQuery: 'stormtrooper+corps'
        },
        {
            term: 'Sith',
            searchQuery: 'sith'
        },
        {
            term: 'Jakku',
            searchQuery: 'jakku'
        },
        {
            term: 'Stormtrooper Corps',
            searchQuery: 'stormtrooper+corps'
        }
    ]

    return (
        <main className="landing-page">
            <section className="landing-page__banner">
                <p className="landing-page__banner-text">
                    <img className="landing-page__banner-icon" src={bb8} alt="rolling type droid icon" />
                    Here to help.
                <Link to="/" className="landing-page__banner-link">
                        Resources for when those weren't the droids you were looking for.
                        </Link>
                </p>
            </section>
            <section className="landing-page__job-search">
                <form className="landing-page__job-form" onSubmit={(event) => handleClick(event)}>

                    <section className="landing-page__job-form-section">
                        <p className="landing-page__job-form-heading">What</p>
                        <label className="landing-page__job-form-label">Job title, experience, or branch of the Empire
                            <input className="landing-page__job-form-input" name="what" type="text" placeholder="Job title, experience, or branch of the Empire" />
                        </label>
                    </section>

                    <section className="landing-page__job-form-section">
                        <p className="landing-page__job-form-heading">Where</p>
                        <label className="landing-page__job-form-label">Planet, galactic sector, or outpost
                            <input className="landing-page__job-form-input" name="where" type="text" placeholder="Planet, galactic sector, or outpost" />
                        </label>
                    </section>

                    <button className="landing-page__job-form-button">Find Jobs</button>
                </form>

                <p className="landing-page__posting-cta"><Link className="landing-page__posting-cta-link" to="/">Upload your hologram</Link> - It only takes a few seconds.</p>
                <p className="landing-page__posting-cta"><Link className="landing-page__posting-cta-link" to="/">Commanders: Post a job</Link> - Your next trooper is here.</p>

            </section>


            <article className="landing-page__recommended">
                <section className="landing-page__recommended-wrapper">
                    <h2 className="landing-page__recommended-heading">Popular Searches</h2>
                    <ul className="landing-page__recommended-list">
                        {popularSearches.map((tag) => {
                            return <SearchTag tag={tag} />
                        })}
                    </ul>
                </section>
            </article>
            <section className="landing-page__employee-cta">
                <h2 className="landing-page__employee-cta-heading">Help the Empire find Jedi</h2>
                <button className="landing-page__employee-cta-upload">Upload your hologram</button>
            </section>
        </main >
    )

}