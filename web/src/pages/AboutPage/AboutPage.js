import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <main>
        I created this project because of the elder loneliness experienced by
        our elders here in Christchurch, New Zealand and honestly everywhere.
        This website is a prototype project to try and connect persons and
        elders with similar interests, for fighting loneliness and depression.
        Instead of sharing lived experiences, skills, and try to activate
        positive experiences in the community.
      </main>
    </>
  )
}

export default AboutPage
