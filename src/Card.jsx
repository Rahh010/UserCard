import './Card.css'

function Card(props) {
    const { isOnline, src, name, place, role, skills } = props.att
    return (
        <div className='card'>
            <div className="status">
                <h3 id='off-on'>{ isOnline? 'Online' : 'Offline'}</h3>
                <img
                    src={ src }
                    alt="ProfileImage"
                    id='img'
                />
            </div>
            <div className="details">
                <p id='name'>{ name }</p>
                <p id="place">{ place }</p>
                <p id="role">{ role }</p>
            </div>
            <div className="btn">
                <button type="button" id="btn1">Message</button>
                <button type="button" id="btn2">Following</button>
            </div>
            <div className="skills">
                <h4 id='skill'>Skills</h4>
                <ul className='listItem'>
                    {skills.map((e, i) => {
                        return <li key={i} id='li'>{ e }</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Card;