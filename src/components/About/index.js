import './About.css'
import Title from '../Title'
import Me from './photo.jpeg'

const About = () => {
    return (
        <div id='About'>
            <Title title='About'/>
            <div className='center'>
                <p className='about'>
                    I am an undergraduate Computer Engineering student at Memorial University.
                    I was born and raised in Newfoundland Canada. 
                    In my free time I like to work on projects, hike, play frisbee and read.
                    To find out more about my self feel free to scroll down.
                </p>
                <img src={Me} alt='me' className='image'></img>
            </div>
        </div>
    )
}

export default About
