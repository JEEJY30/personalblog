import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { VscArrowUp } from "react-icons/vsc"
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchSocial } from '../utils/fetchSocials'
import { fetchProject } from '../utils/fetchProjects'

type Props = {
  pageInfo: PageInfo,
  experience: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[]
}
 
export default function Home({pageInfo, experience, skills, projects, socials}:Props) {

  
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 '>
      <Head>
        <title>JEEJYS Portfolio</title>
      </Head>

    <Header socials={socials}/>
    {/* Hero */}
    <section id='hero' className='snap-start'>
      <Hero pageInfo={pageInfo}/>
    </section>
    {/* About */}
    <section id='about' className='snap-start'>
      <About pageInfo={pageInfo}/>
    </section>

    {/* experience */}
    <section id='experience' className='snap-center'>
      <WorkExperience experiences={experience}/>       
    </section>
    {/* skills */}
    <section id='skills' className='snap-start'>
      <Skills skills={skills}/>
    </section>

    {/* projects */}
    <section id='projects' className='snap-start'>
      <Projects projects={projects}/>
    </section>

    {/* contact me */}
    <section id='contact' className='snap-start'>
      <Contact />
    </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-end py-2 px-7'>
            <VscArrowUp
            className='h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experience: Experience[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProject()
  const socials: Social[] = await fetchSocial()

  console.log({experience, skills})
  
  return {
    props:{
      pageInfo,
      experience,
      skills,
      projects,
      socials
    },
    revalidate: 10,
  }
}