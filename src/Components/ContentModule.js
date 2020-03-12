import React from 'react';
import './ContentModule.sass';
import {Route, Switch, withRouter} from 'react-router-dom'

const about = () => { 
    return (
    <React.Fragment>
    <h3>Welcome on my page!</h3>
    <span>
        I am a junior web-developer, starting my journey with IT.
        On my page you will find projects which I've already done, and also technologies which I know so far.
        In case you would see me in my team, feel free to contact.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ex mi. Sed pellentesque orci ut nulla dictum consequat. Etiam faucibus augue lorem, sed vestibulum justo dictum in. Phasellus mattis eros metus, quis vehicula purus varius non. Quisque orci est, rutrum non sagittis a, convallis id dolor. Donec sollicitudin in metus id blandit. In placerat laoreet augue, vitae venenatis erat consectetur quis. Etiam at dapibus tortor. Integer sit amet neque commodo, tincidunt dui cursus, sagittis lectus. Phasellus nunc ligula, facilisis et scelerisque a, mattis sed sem. Proin finibus, tellus vel dapibus placerat, eros magna mollis nunc, in pellentesque augue eros et felis. Integer at venenatis est. Donec quis hendrerit felis. Quisque placerat nisi lacus.

In ut ligula sagittis, ornare dui at, accumsan quam. Curabitur volutpat quis enim ac blandit. Aenean bibendum magna metus, at commodo nulla imperdiet id. Nullam et neque in purus auctor pharetra at a tellus. Sed bibendum dictum enim, in elementum ligula rhoncus id. Suspendisse id velit id tortor cursus rutrum a at turpis. Proin ac porta nibh, non finibus urna. Quisque felis enim, venenatis at mi et, tincidunt placerat lacus. Ut porta metus fringilla consectetur blandit. Proin auctor, turpis quis interdum aliquet, lacus urna tristique diam, sed tempor nibh metus vitae risus.

Mauris a ex tincidunt, maximus nisi sed, sodales felis. Donec euismod urna non neque ornare, a pretium tellus malesuada. Suspendisse imperdiet, libero euismod dictum euismod, neque leo dignissim purus, non dapibus augue elit ut velit. Sed tempor ultrices sapien, et porta urna vehicula non. Proin imperdiet turpis venenatis elit pretium, a condimentum erat porta. Praesent rhoncus iaculis enim. Integer sapien neque, dapibus a erat vitae, interdum mollis sem. Donec lacinia malesuada dignissim. Suspendisse blandit tempor nisi eget ullamcorper. Nulla at facilisis ligula. Duis convallis ante vitae laoreet pretium. Aliquam erat volutpat. Nulla sit amet tellus nec sapien pretium tristique. Vestibulum efficitur molestie turpis sit amet finibus. Integer blandit laoreet porta.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vel metus vitae nunc congue fermentum et eu ex. Donec eleifend risus nec purus porttitor, at convallis tortor imperdiet. Integer iaculis vulputate eleifend. Vivamus augue velit, euismod ac euismod non, tristique vitae diam. Duis ut enim eget ipsum consequat cursus et id urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In fringilla placerat suscipit. Praesent eu volutpat augue. Quisque sed tempor ipsum. Aenean tincidunt urna ut enim auctor tempor. Proin lobortis a enim sed feugiat. Suspendisse scelerisque laoreet efficitur. Sed tempus scelerisque urna, nec lobortis mauris egestas nec. Quisque sagittis lorem finibus tellus tempus rutrum non eu dui. Vestibulum cursus nulla dolor, ac vehicula tortor efficitur eget.

Phasellus ullamcorper sapien ac orci efficitur consequat. Mauris et ante ac arcu viverra feugiat non ut felis. Nam vestibulum mi ipsum, nec dictum enim bibendum ac. Aenean lacinia tortor ac volutpat congue. Sed malesuada porta ipsum, sed viverra libero gravida eu. Donec ullamcorper sed libero at lacinia. Integer viverra elit at magna condimentum, bibendum malesuada justo tempus. Phasellus vel aliquam dui, eu hendrerit turpis. Vestibulum posuere fringilla nulla, rutrum egestas ante pulvinar vitae. Nunc quis tortor sit amet mi pretium maximus.


    </span>
    </React.Fragment>
)}

const technologies = () => { 
    return (
    <React.Fragment>
    <h3>TECHNOLOGIES</h3>
    <span>
        HTML5, CSS3, Sass, JavaScript, jQuery<br></br>
        React, React Router, Node.js, Express<br></br>
        Git, Figma<br></br>
    </span>
    </React.Fragment>
)}

const projects = () => { 
    return (
    <React.Fragment>
    <h3>PROJECTS</h3>
    <span>
        Portfolio, strona o bananie
    </span>
    </React.Fragment>
)}

const contact = () => { 
    return (
    <React.Fragment>
    <h3>CONTACT</h3>
    <span>
        LinkedIn, telefon szwajcarski
    </span>
    </React.Fragment>
)}

const ContentModule = () => (
    <section className="mainContent">
    <Switch>
        <Route exact path='/' component={about}></Route>
        <Route path='/about' component={about}></Route>
        <Route path='/technologies' component={technologies}></Route>
        <Route path='/projects' component={projects}></Route>
        <Route path='/contact' component={contact}></Route>
    </Switch>
    </section>
)

export default withRouter(ContentModule)