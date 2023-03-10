import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [form] = Form.useForm();
    const [cards, setCards] = useState([
        { title: 'Laboratorul 1', content: 'Prezentat', prenume: 'Nota 10' },

    ]);
    const handleSubmit = (values: { title: string; content: string; prenume: string }) => {
        const newCard = { title: values.title, content: values.content, prenume: values.prenume };
        const newCards = [...cards, newCard];
        setCards(newCards);
        console.log('valorile', values);
        alert('Forma a fost adaugata');
    };
    return (
        <Layout>
            <Header style={{ display: 'flex', justifyContent: 'center' }}>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">LABORATORUL 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={300} style={{ background: '#fff' }}>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title="Menu">
                            <Menu.Item key="1">Laboratoarele necesare</Menu.Item>
                            <Menu.Item key="2">Laboratoarele date</Menu.Item>
                            <Menu.Item key="3">Laboratoarele in proces</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Content style={{ padding: '50px' }}>
                    <Form form={form} onFinish={handleSubmit}>
                        <Form.Item name="title" rules={[{ required: true, message: 'Introduceți Laboratorul' }]}>
                            <Input placeholder="Laboratorul" />
                        </Form.Item>
                        <Form.Item name="content" rules={[{ required: true, message: 'Introduceti starea' }]}>
                            <Input placeholder="Prezentat sau ne prezentat" />
                        </Form.Item>
                        <Form.Item name="prenume" rules={[{ required: true, message: 'Introduceti nota' }]}>
                            <Input placeholder="Nota" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Trimite
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {cards.map(card => (
                            <Card key={card.title} style={{ width: 300}}>
                                <Card.Meta title={`${card.title} - ${card.prenume}`} description={card.content} />
                            </Card>
                        ))}
                    </div>
                </Content>
            </Layout>

        </Layout>
    );
};

export default App;
