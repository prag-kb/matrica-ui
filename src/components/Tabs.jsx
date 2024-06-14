import { Tabs, Tab, Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { SiReacttable } from 'react-icons/si'

const TabsBoard = () => {
    const tabsArray = [
        {
            id: 1,
            title: "NFTs",
            content: ""
        },
        {
            id: 2,
            title: "Tokens",
            content: ""
        },
        {
            id: 3,
            title: "Staking",
            content: <Stalking />
        },
    ]

    return (
        <Tabs className='' classNames={{
            base: "m-[20px] w-full flex-col",
            tabList: ""
        }}>
            {tabsArray.map((x) => (
                <Tab key={x?.id} title={x?.title} className='m-[20px] w-full'>
                    {x?.content}

                </Tab>
            ))}
        </Tabs>
    )
}

export default TabsBoard

const Stalking = () => {
    const titles = [
        {
            id: "1",
            description: "Name"
        },
        {
            id: "2",
            description: "$ Price"
        },
        {
            id: "3",
            description: "Holdings"
        },
    ]

    const values = [
        {
            id: 1,
            icon: <SiReacttable/>,
            description: "SCALES"
        },
        {
            id: 2,
            icon: "$",
            description: "0"
        },
        {
            id: 3,
            icon: "$",
            content: (
                <>
                    <div>Value: 125.55</div>
                    <div>Count: 2,284,571,100</div>
                </>
            )
        },
    ]
    return (
        <Card>
            <CardHeader>
                <div className="grid justify-items-start" style={{ gridTemplateColumns: "7fr 7fr 0fr" }}>
                    {titles?.map((x) => (
                        <div className="text-default-400" id={x?.id}>{x?.description}</div>
                    ))}
                </div>
            </CardHeader>
            <CardBody>
                <div className="grid justify-items-start items-center " style={{ gridTemplateColumns: "28rem 25rem 14rem" }}>
                    {values?.map((x) => (
                        <>
                            {x?.content ?
                                <div className="">{x?.content}</div> :
                                <div className='flex items-center gap-3'>
                                    <div className="">{x?.icon}</div>
                                    <div className="">{x?.description}</div>
                                </div>
                            }
                        </>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}