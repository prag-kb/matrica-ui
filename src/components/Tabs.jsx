import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'
import React from 'react'

const TabsBoard = () => {
    const tabsArray = [
        {
            id: 1,
            title: "NFTs"
        },
        {
            id: 2,
            title: "Tokens"
        },
        {
            id: 3,
            title: "Staking"
        },
    ]

    return (
        <Tabs className='' classNames={{
            base: "m-[20px] w-full flex-col",
            tabList: ""
        }}>
            {tabsArray.map((x) => (
                <Tab key={x?.id} title={x?.title} className='m-[20px] w-full'>
                    <Card>
                        <CardBody>
                            {x?.title}
                        </CardBody>
                    </Card>
                </Tab>
            ))}
        </Tabs>
    )
}

export default TabsBoard