export default function ListTiles({ job }) {

    return (
        <li className="job-tile">
            <h2 className="job-tile__title">{job.title}</h2>
            <p className="job-tile__company">{job.company}</p>
            <p className="job-tile__company-rating">{job.rating.toPrecision(2)}</p>
            <p className="job-tile__location">{job.location}</p>
            <ul className="job-tile__responsibilities-list">
                {job.responsibilities.map((resp, index) => {
                    return (
                        <li key={index} className="job-tile__responsibilities-list-item">
                            {resp}
                        </li>
                    )
                })}
            </ul>
            <p className="job-tile__posted">{job.postedDaysAgo} day{job.postedDaysAgo === 1 ? "" : "s"} ago</p>
        </li>
    )

}