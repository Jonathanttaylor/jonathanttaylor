import Title from '../Title'
import TechBadge from '../TechBadge'
import CardContain from '../CardContain'
import CardProj from './CardProj'
import DMV from './Images/DMV.png'
import DMVMac from './Downloads/DMV Simulator (MacOS).zip'
import DMVWin from './Downloads/DMV Simulator (Windows).zip'
import PCalc from './Images/pcalc.png'
import Site from './Images/site.png'

const Projects = () => {
    return (
        <div id='Projects' style={{textAlign: 'center'}}>
            <Title title='Projects'/>
            <CardContain 
                body={[
                    <CardProj 
                        project='DMV Simulator'
                        technology={[
                            <br></br>,
                            <TechBadge tech='Unity'/>,
                            <TechBadge tech='C#'/>,                              
                        ]}
                        image={DMV}
                        group='Term 5 design project, Team of 2'
                        desc='3D simulation game with the objective of going to the DMV to renew your license'
                        ytID='4d7K3kEljIE'
                        code='https://github.com/Jonathanttaylor/DMV-Simulator'
                        dload={[
                            <a href={DMVMac}>MacOS Download</a>,
                            <br></br>,
                            <a href={DMVWin}>Windows Download</a>
                        ]}
                    />,
                    <CardProj 
                        project='PaceCalc'
                        technology={[
                            <br></br>,
                            <TechBadge tech='XCode'/>,
                            <TechBadge tech='Swift'/>,                              
                        ]}
                        image={PCalc}
                        group='Individual Project'
                        desc='IOS application to calculate running pace, time or distance in km or mi'
                        ytID='v4ImKHjgsyc'
                        code='https://github.com/Jonathanttaylor/PaceCalc'
                    />,
                    <CardProj 
                    project='Personal Website'
                    technology={[
                        <br></br>,
                        <TechBadge tech='React'/>,
                        <TechBadge tech='JavaScript'/>,
                        <TechBadge tech='CSS'/>,                            
                    ]}
                    image={Site}
                    group='Individual Project'
                    desc='Personal website (this website), used for expanding on my resume.'
                    code='https://github.com/Jonathanttaylor/PaceCalc'
                />
                ]}
            />
        </div>
    )
}

export default Projects
