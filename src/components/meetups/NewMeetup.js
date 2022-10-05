import classes from '../meetups/NewMeetup.module.css'
import Card from '../ui/Card'
function NewMeetup(){
return (
    <Card>
       <form className={classes.form}>
        <div className={classes.controls}>
            <label htmlFor='title'>Meetup title</label>
            <input type='text' required id='title'></input>
        </div>
       </form>
    </Card>
)
}export default NewMeetup