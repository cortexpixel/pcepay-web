"use client";
import { Link } from '@/lib/router-shim';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

const Privacy = () => {
  return (
    <Layout>
      <SEOHead 
        title="Peace Payroll | Privacy Policy"
        description="Peace Payroll privacy policy. Learn how we collect, use and protect your personal information."
        keywords="privacy policy, data protection, GDPR, personal information"
        canonicalPath="/privacy"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Your privacy is important to us.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <p className="text-lg text-muted-foreground mb-8">
              This Peace Payroll privacy policy explains generally how we receive personal information about you and how we use such information.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">What information do we hold?</h2>
            <p className="text-muted-foreground mb-4">We may collect and process the following personal information about you:</p>

            <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">1. Contact Data</h3>
              <p className="text-muted-foreground mb-2"><strong>Description:</strong> Who you are, Where you live</p>
              <p className="text-muted-foreground"><strong>Examples of use:</strong> Reflected on payslips.</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">2. Personal Details</h3>
              <p className="text-muted-foreground mb-2"><strong>Description:</strong> Age, Gender</p>
              <p className="text-muted-foreground"><strong>Examples of use:</strong> For HMRC purposes.</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">3. Transactional Data</h3>
              <p className="text-muted-foreground mb-2"><strong>Description:</strong> Bank and/or card details</p>
              <p className="text-muted-foreground"><strong>Examples of use:</strong> Wage payment.</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">4. Contractual Data</h3>
              <p className="text-muted-foreground mb-2"><strong>Description:</strong> Records of contract</p>
              <p className="text-muted-foreground"><strong>Examples of use:</strong> Audit purposes.</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">5. Documentary Data and National Identifiers</h3>
              <p className="text-muted-foreground mb-2"><strong>Description:</strong> Details about you that are stored in documents, such as: National insurance number.</p>
              <p className="text-muted-foreground"><strong>Examples of use:</strong> For HMRC purposes. Reflected on payslips.</p>
            </div>

            <hr className="my-10 border-border" />

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Where do we get our information from?</h2>
            <p className="text-muted-foreground mb-6">
              Information we have of you is as provided to us by your firm/branch upon the commencement of your employment contract.
            </p>

            <hr className="my-10 border-border" />

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Using your information in accordance with data protection laws.</h2>
            <p className="text-muted-foreground mb-6">
              Data protection laws require us to meet certain conditions before we're allowed to use your personal information in the way we describe in this privacy policy. We take these responsibilities extremely seriously. To use your personal information, we'll rely on the following conditions, depending on the activities we're carrying out:
            </p>

            <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
              <li><strong>Providing our contracts and services to you:</strong> We'll process your personal information to carry out our responsibilities resulting from any agreements you've entered into with us and to provide you with the information, products and services you've asked from us, which may include online services.</li>
              <li><strong>Complying with applicable laws:</strong> We may process your personal information to comply with any legal obligation we're subject to.</li>
              <li><strong>Legitimate interests:</strong> To use your personal data for any other purpose described in this privacy policy, we'll rely on a condition known as 'legitimate interests'. It's in our legitimate interests to collect your personal data as it provides us with the information that we need to provide our services to you more effectively.</li>
              <li><strong>Consent:</strong> Signing our data privacy policy gives us consent to use your data for the purpose of providing payroll services.</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Please be aware that the personal information you provide to us, and which we collect about you, is required for us to be able to provide our services to you and without it we may not be able to do so.
            </p>

            <hr className="my-10 border-border" />

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">How long do we keep your information for?</h2>
            <p className="text-muted-foreground mb-6">
              We'll keep your personal information in accordance with our internal retention policies. We'll determine the length of time we keep it for based on the minimum retention periods required by law or regulation (5 years). We'll only keep your personal information after this period if there's a legitimate and provable business reason to do so.
            </p>

            <hr className="my-10 border-border" />

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Fraud prevention</h2>
            <p className="text-muted-foreground mb-6">
              Peace Payroll Limited if required, where false or inaccurate information is provided, and fraud is identified details will be passed to fraud prevention agencies. Law enforcement agencies may access and use this information. We may also share information about you with other organisations and public bodies, including the police and we may check and/or file your details with fraud prevention agencies and databases.
            </p>

            <hr className="my-10 border-border" />

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Your rights</h2>
            <p className="text-muted-foreground mb-6">
              You have rights under data protection law that relate to the way we process your personal data. More information on these rights can be found on the Information Commissioner's website. If you wish to exercise any of these rights, please get in touch with us using the above details. Alternatively, you can also use the Contact Us section of our website.
            </p>

            <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Your rights include:</h3>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-4">
                <li>The right to access the personal data that we hold about you.</li>
                <li>The right to make us correct any inaccurate personal data we hold about you.</li>
                <li>
                  The right to make us erase any personal data we hold about you. This right will only apply where for example:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>We no longer need to use the personal data to achieve the purpose we collected it for.</li>
                    <li>You withdraw your consent if we're using your personal data based on that consent.</li>
                    <li>Where you object to the way we use your data, and there is no overriding legitimate interest.</li>
                  </ul>
                </li>
                <li>
                  The right to restrict our processing of the personal data we hold about you. This right will only apply where for example:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>You dispute the accuracy of the personal data we hold.</li>
                    <li>You would like your data erased, but we require to hold it in order to stop its processing.</li>
                    <li>You have the right to require us to erase the personal data but would prefer that our processing is restricted instead.</li>
                    <li>Where we no longer need to use the personal data to achieve the purpose, we collected it for, but you need the data for legal claims.</li>
                  </ul>
                </li>
                <li>The right to object to our processing of personal data we hold about you.</li>
                <li>The right to receive personal data, which you have provided to us, in a structured, commonly used and machine-readable format. You also have the right to make us transfer this personal data to another organisation.</li>
                <li>The right to withdraw your consent, where we're relying on it to use your personal data (for example, to provide you with marketing information about our services or products).</li>
              </ol>
            </div>

            <hr className="my-10 border-border" />

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contacts and complaints</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this privacy policy or wish to exercise any of your rights, please get in touch with us using the below address or email. Alternatively, you can also use the contact us via our telephone number or website. If you have any concerns about the way we process your personal data or are not happy with the way we've handled a request by you in relation to your rights, you also have the right to make a complaint to the Information Commissioner's.
            </p>

            <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Please contact Peace Payroll Limited on:</h3>
              <address className="text-muted-foreground not-italic space-y-1">
                <p>6 Watergate Walk</p>
                <p>Mill Harbour Court</p>
                <p>London</p>
                <p>E14 9XH</p>
                <p className="mt-4">
                  Phone: <a href="tel:+442045054951" className="text-accent hover:underline">020 4505 4951</a>
                </p>
                <p>
                  Email: <a href="mailto:support@pcepay.co.uk" className="text-accent hover:underline">support@pcepay.co.uk</a>
                </p>
              </address>
            </div>

            <p className="text-muted-foreground mb-4">
              For further enquiries about our privacy policy, please send us a message using our{' '}
              <Link to="/contact" className="text-accent hover:underline">Contact Us</Link> form.
            </p>

            <p className="text-muted-foreground">
              By using this website you agree to our{' '}
              <Link to="/cookies" className="text-accent hover:underline">cookie policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
