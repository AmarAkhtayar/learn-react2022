import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'
function MeetupList(props) {
return <ul className={classes.list}>
{props.meetups.map((meetup) => (
    <MeetupItem
        key={meetup.id}
        image={meetup.image}
        address={meetup.address}
        title={meetup.title}
        description={meetup.description}
        id={meetup.id}

    />
)

)}
</ul>
}
export default MeetupList