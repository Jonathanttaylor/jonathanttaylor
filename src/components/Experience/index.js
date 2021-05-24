import CardContain from '../CardContain'
import Title from '../Title'
import TechBadge from '../TechBadge'
import CardExp from './CardExp'
import GovNL from './Logos/govnl.png';
import WindRiver from './Logos/wind-river.png';
import Bell from './Logos/bell.png';
import Paradigm from './Logos/paradigm.jpg'
import GE from './Logos/ge.png'

const Experience = () => {
    return (
        <div id='Experience' style={{textAlign: 'center'}}>
            <Title title='Experience'/>
            <CardContain 
                body={[
                    <CardExp
                    position='Software Developer'
                    technology={[
                        <br></br>,
                        <TechBadge tech='WordPress'/>,
                        <TechBadge tech='JavaScript'/>,
                        <TechBadge tech='PHP'/>, 
                        <TechBadge tech='MySQL'/>,                                
                    ]}
                    image={GovNL}
                    company='Government of NL'
                    date='Jan. 2021 - April 2021'
                    body={[
                        <strong>Fourth Work Term From Jan. 2021 - April 2021</strong>,
                        <ul>
                            <li>Developed a working prototype of an application allowing users to create, approve and manage an important government document</li>
                            <li>The application will save hundreds of employees time by automating a large portion of the document creation process</li>
                            <li>WordPress, JavaScript, PHP, MySQL and CSS were used to create the application</li>
                        </ul>
                    ]}
                />,
                <CardExp
                    position='Software Developer'
                    technology={[
                        <br></br>,
                        <TechBadge tech='Docker'/>,
                        <TechBadge tech='Bash'/>,
                        <TechBadge tech='C'/>,
                    ]}
                    image={WindRiver}
                    company='Wind River Systems'
                    date='Sept. 2019 - Dec. 2019'
                    body={[
                        <strong>Third Work Term From Sept. 2019 - Dec. 2019</strong>,
                        <ul>
                            <li>Created a Docker development environment used by approximately 150 Wind River employees</li>
                            <li>The development environment reduced employees initial setup time from multiple days to less than 2 hours</li>
                            <li>Communicated with Wind River employees in Ottawa, Beijing and Chengdu to troubleshoot the development environment</li>
                            <li>Made code rework changes to the product code (written in C)</li>
                        </ul>
                    ]}
                />,
                <CardExp
                    position='Software Developer'
                    technology={[
                        <br></br>,
                        <TechBadge tech='C++'/>,
                        <TechBadge tech='Arduino'/>,
                    ]}
                    image={Paradigm}
                    company='Paradigm Hyperloop'
                    date='Sept. 2018 - Dec. 2019'
                    body={[
                        <strong>MUN Student Team From Sept. 2019 - Dec. 2019</strong>,
                        <ul>
                            <li>Member of team who finished 8th during SpaceX’s 4th competition in July 2019</li>
                            <li>Developed software in a small team following agile methodology</li>
                            <li>Wrote Arduino programs for testing various different sensors such as a tachometer</li>
                            <li>Created logic and wrote code(C++) for transitioning between braking states</li>
                        </ul>
                    ]}
                />,
                <CardExp
                    position='Data Analyst'
                    technology={[
                        <br></br>,
                        <TechBadge tech='SQL Server'/>,
                        <TechBadge tech='MicroStrategy'/>,
                    ]}
                    image={Bell}
                    company='Bell Canada'
                    date='Jan. 2019 - May 2019'
                    body={[
                        <strong> Second Work Term From Sept. 2019 - Dec. 2019</strong>,
                        <ul>
                            <li>Created customized reports based on requests from management using SQL Server and MicroStrategy</li>
                            <li>Automated monthly business metric reports that were previously created manually saving approximately, 8 hours of clerical work a month</li>
                            <li>Created networks in SAP, worked with implementation managers and spec writers to install/remove technology corresponding to these networks</li>
                        </ul>
                    ]}
                />,
                <CardExp
                    position='Engineering Co-op'
                    technology={[
                        <br></br>,
                        <TechBadge tech='Adobe Acrobat'/>,
                        <TechBadge tech='Microsoft Excel'/>, 
                    ]}
                    image={GE}
                    company='GE Renewable Energy'
                    date='April 2018 - Aug. 2018'
                    body={[
                        <strong> First Work Term - Sept. 2019 - Dec. 2019</strong>,
                        <ul>
                            <li>Involved in commissioning of the controls systems</li>
                            <li>Created red-line drawings for commissioning team</li>
                            <li>Created critical path documentation for the Mechanicalcompletion process</li>
                        </ul>
                    ]}
                />
                ]}
            />

        </div>
    )
}

export default Experience
