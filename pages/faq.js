import Layout from "../components/shared/Layout";

export default function faq() {
    return (
        <Layout title="Nofomo - FAQ">
            <div className="px-2 mx-auto mb-10 text-center sm:px-6 mt-7 lg:px-8">
                <h1 className="text-6xl font-extrabold tracking-tight text-purple-600">
                    <span className="block xl:inline">
                        Frequently Asked Questions
                    </span>
                </h1>
                <div className="px-6 mt-10 text-left bg-white">
                    <p className="pt-6 text-2xl">How to connect an exchange?</p>
                    <p className="py-6 pt-3 border-b-2 border-indigo-200">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                    <p className="pt-6 text-2xl">
                        How to connect an investment account?
                    </p>
                    <p className="py-6 pt-3 border-b-2 border-indigo-200">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                    <p className="pt-6 text-2xl">
                        How does the multiplier work?
                    </p>
                    <p className="py-6 pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
