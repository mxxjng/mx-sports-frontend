import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import Games from '../components/games';

export default function PlayOffs() {
  return (
    <div>
      <Head>
        <title>Playofss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h1 className="text-2xl text-headline font-headline mb-4">
            Playoffs
          </h1>
          <div className="flex overflow-x-auto">
            <div>
              <div className="width-200" style={{ width: '200px' }}>
                <h2 className=" text-md mb-2 text-textColor text-center">
                  Semifinals
                </h2>
              </div>
              <div
                style={{ height: '240px', width: '232px' }}
                className="relative pr-8"
              >
                <div className="bg-bgHighlight playoff-match rounded-md mb-8 absolute left-0 top-0">
                  <div className="p-3 flex items-center justify-between bb">
                    <div className="flex items-center">
                      <div className="bg-textColor w-6 h-6 rounded-full mr-2"></div>
                      <p className="text-textColor">TBA</p>
                    </div>
                    <div>
                      <span className="text-headline font-headline">-</span>
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-textColor w-6 h-6 rounded-full mr-2"></div>
                      <p className="text-textColor">TBA</p>
                    </div>
                    <div>
                      <span className="text-headline font-headline">-</span>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-bgHighlight playoff-match rounded-md absolute left-0"
                  style={{ top: '129px' }}
                >
                  <div className="p-3 flex items-center bb justify-between">
                    <div className="flex items-center">
                      <div className="bg-textColor w-6 h-6 rounded-full mr-2"></div>
                      <p className="text-textColor">TBA</p>
                    </div>
                    <div>
                      <span className="text-headline font-headline">-</span>
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-textColor w-6 h-6 rounded-full mr-2"></div>
                      <p className="text-textColor">TBA</p>
                    </div>
                    <div>
                      <span className="text-headline font-headline">-</span>
                    </div>
                  </div>
                </div>
                <div className="connector"></div>
                <div className="connector-line"></div>
              </div>
            </div>
            <div>
              <h2 className=" text-md mb-2 text-textColor text-center">
                ELF Bowl
              </h2>
              <div
                style={{ height: '240px', width: '200px' }}
                className="relative"
              >
                <div
                  className="bg-bgHighlight playoff-match rounded-md absolute left-0"
                  style={{ top: '65px' }}
                >
                  <div className="p-3 flex items-center justify-between bb">
                    <div className="flex items-center">
                      <div className="bg-textColor w-6 h-6 rounded-full mr-2"></div>
                      <p className="text-textColor">TBA</p>
                    </div>
                    <div>
                      <span className="text-headline font-headline">-</span>
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-textColor w-6 h-6 rounded-full mr-2"></div>
                      <p className="text-textColor">TBA</p>
                    </div>
                    <div>
                      <span className="text-headline font-headline">-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
