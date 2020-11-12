export default function ListTiles(props) {

    const tempData = {
        "id": 1,
        "title": "Imperial Security Bureau Agent",
        "company": "Communications Division",
        "rating": 4,
        "reviewCount": 9,
        "location": "Galactic City, Coruscant",
        "postedDaysAgo": 12,
        "responsibilities": [
            "Check for Imperial approved communications only among civilians",
            "Log exceptions for troopers to follow up on",
            "Keep an eye out for rebel communications"
        ]
    }

    return (
        <li className="job-tile">
            <h2 className="job-tile__title">{tempData.title}</h2>
            <p className="job-tile__company">{tempData.company}</p>
            <p className="job-tile__company-rating">{tempData.rating.toPrecision(2)}</p>
            <p className="job-tile__location">{tempData.location}</p>
            <ul className="job-tile__responsibilities-list">
                {tempData.responsibilities.map((resp, index) => {
                    return (
                        <li key={index} className="job-tile__responsibilities-list-item">
                            {resp}
                        </li>
                    )
                })}
            </ul>
            <p className="job-tile__posted">{tempData.postedDaysAgo} day{tempData.postedDaysAgo === 1 ? "" : "s"} ago</p>
        </li>
    )

}