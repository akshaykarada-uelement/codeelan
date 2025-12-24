export default function CodeOfConduct() {
  return (
    <main className="min-h-screen section-block-padding bg-white">
      <div className="container-padding space-y-10">
        <div className="text-center">
          <h1 className="fl2 inline-block relative title-content-gap">
            Code of Conduct
            <span className="block absolute right-0  w-10 h-2 bg-[#49CF38]"></span>
          </h1>

          <p className="fl7 md:max-w-[60vw] mx-auto">
            All participants of CodeElan Technologies are expected to abide by
            our Code of Conduct, both online and during in-person events that
            are hosted and/or associated with CodeElan Technologies.
          </p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="w-1 h-8 bg-[#49CF38] transform rotate-[15deg]" />
          <h2 className="fl3">The Pledge</h2>
        </div>
        <p className="fl7">
          In the interest of fostering an open and welcoming environment, we
          pledge to make participation in our project and our community a
          harassment-free experience for everyone, regardless of age, body size,
          disability, ethnicity, gender identity and expression, level of
          experience, nationality, personal appearance, race, religion, or
          sexual identity and orientation.
        </p>
      </div>

      <div className="container-paddingv2">
        <div className="bg-[#F5F5F5] p-6 md:p-8 px-8 md:px-13 3xl:px-18  my-8 md:my-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1 h-8 bg-green-500 transform rotate-[15deg]" />
            <h2 className="fl3">The Standards</h2>
          </div>

          <p className="fl7 mb-4">
            Examples of behaviour that contributes to creating a positive
            environment include:
          </p>

          <ul className="list-disc fl7 pl-5 space-y-2">
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>
              Referring to people by their preferred pronouns and using
              gender-neutral pronouns when uncertain
            </li>
            <li>Examples of unacceptable behaviour by participants include:</li>
            <li>
              Trolling, insulting/derogatory comments, and personal or political
              attacks
            </li>
            <li>Public or private harassment</li>
            <li>
              Publishing others’ private information, such as a physical or
              electronic address, without explicit permission
            </li>
            <li>
              The use of sexualized language or imagery and unwelcome sexual
              attention or advances
            </li>
            <li>Advocating for, or encouraging, any of the above behaviour</li>
          </ul>
        </div>
      </div>

      <div className="container-padding">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1 h-8 bg-green-500 transform rotate-[15deg]" />

          <h2 className="fl3">Enforcement</h2>
        </div>
        <p className="fl7">
          Violations of the Code of Conduct may be reported by sending an email
          to info@codeelan.com. All reports will be reviewed and investigated
          and will result in a response that is deemed necessary and appropriate
          to the circumstances. Further details of specific enforcement policies
          may be posted separately. We hold the right and responsibility to
          remove comments or other contributions that are not aligned to this
          Code of Conduct, or to ban temporarily or permanently any members for
          other behaviours that they deem inappropriate, threatening, offensive,
          or harmful.
        </p>
      </div>
    </main>
  );
}
