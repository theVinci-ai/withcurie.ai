'use client';
import React, { useState } from 'react';
import { Tabs } from 'antd';
import { TabContent } from '../common/TabContent';

const { TabPane } = Tabs;

export const GenerateNotes: React.FC = (): React.ReactElement => {
  const [selectedTab, setSelectedTab] = useState<string>('1');

  const handleButtonClick = (nextTab: string): void => {
    setSelectedTab(nextTab);
  };

  return (
    <section
      id='generic-notes'
      className='generate-notes bg-[#F7F7F7]  relative overflow-hidden '
    >
      <div className='bg-white  h-full w-full absolute left-1/2 hidden lg:block '></div>
      <div className='max-w-screen-xl mx-auto px-4 lg:py-10'>
        <div className='pt-12 pb-6 md:pt-16 md:pb-6'>
          <Tabs activeKey={selectedTab} onChange={setSelectedTab}>
            <TabPane tab='EHR' key='1'>
              <TabContent
                subtitle={
                  <>
                    Sync Patient Records{' '}
                    <span className='italic font-normal text-success'>
                      Seamlessly
                    </span>
                  </>
                }
                paragraph='Integrate and manage patient data effortlessly, creating a reliable source of truth for your practice.'
                btnText='Sync With EHR'
                imageSrc='/generates-code/ehr.svg'
                onButtonClick={(): void => {
                  handleButtonClick('2');
                }}
                // showArrow={true}
              />
            </TabPane>
            <TabPane tab='Appointments' key='2'>
              <TabContent
                subtitle={
                  <>
                    <span className='italic font-normal text-success'>
                      Streamline
                    </span>{' '}
                    Appointment Management
                  </>
                }
                paragraph='Automate scheduling and tracking, ensuring hassle-free coordination and optimized patient visits.'
                btnText='Create Appointment'
                imageSrc='/generates-code/appointment.svg'
                onButtonClick={(): void => {
                  handleButtonClick('3');
                }}
              />
            </TabPane>
            <TabPane tab='Patient Summary' key='3'>
              <TabContent
                subtitle={
                  <>
                    Generate Comprehensive{' '}
                    <span className='italic font-normal text-success'>
                      Patient Overviews
                    </span>
                  </>
                }
                paragraph='Create dynamic Patient 360 profiles indexed on chief complaints, empowering better decision-making.'
                btnText='Generate Patient Summary'
                imageSrc='/generates-code/patient-summary.svg'
                onButtonClick={(): void => {
                  handleButtonClick('4');
                }}
              />
            </TabPane>
            <TabPane tab='Scribe and Note' key='4'>
              <TabContent
                subtitle={
                  <>
                    <span className='italic font-normal text-success'>
                      Simplify
                    </span>{' '}
                    Medical Note Documentation
                  </>
                }
                paragraph='Automatically generate clear, EHR-ready SOAP notes in under a minute, saving valuable time.'
                btnText='Scribe & Generate Notes'
                imageSrc='/generates-code/notes.svg'
                onButtonClick={(): void => {
                  handleButtonClick('5');
                }}
              />
            </TabPane>
            <TabPane tab='Medical Codes' key='5'>
              <TabContent
                subtitle={
                  <>
                    Ensure{' '}
                    <span className='italic font-normal text-success'>
                      Accurate
                    </span>{' '}
                    Medical Coding
                  </>
                }
                paragraph='Automatically assign compliant medical codes to notes, minimizing errors and maximizing efficiency.'
                btnText='Generate Medical Claim'
                imageSrc='/generates-code/medical-codes.svg'
                onButtonClick={(): void => {
                  handleButtonClick('6');
                }}
              />
            </TabPane>
            <TabPane tab='Claim' key='6'>
              <TabContent
                subtitle={
                  <>
                    Submit{' '}
                    <span className='italic font-normal text-success'>
                      Error-Free
                    </span>{' '}
                    Insurance Claims
                  </>
                }
                paragraph='Generate, optimize, and submit claims with a 95% approval rate, reducing administrative burdens.'
                btnText='Submit Claim'
                imageSrc='/generates-code/claim.svg'
                onButtonClick={(): void => {
                  handleButtonClick('7');
                }}
              />
            </TabPane>
            <TabPane tab='Payments' key='7'>
              <TabContent
                subtitle={
                  <>
                    <span className='italic font-normal text-success'>
                      Automate
                    </span>{' '}
                    Patient Payment Collections
                  </>
                }
                paragraph='Integrate payment systems seamlessly with Stripe to streamline transactions and ensure faster revenue.'
                btnText="Let's Get In Touch"
                imageSrc='/generates-code/payment.svg'
                onButtonClick={() => {
                  window.location.href = '/contact';
                }}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
