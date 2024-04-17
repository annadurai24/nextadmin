export default function DashboardLayout({
    children,
    notification,
    revenue,
    user,
    login
}: {
    children: React.ReactNode,
    notification: React.ReactNode,
    revenue: React.ReactNode,
    user: React.ReactNode,
    login: React.ReactNode
}): JSX.Element {
    const isLoggedIn = true;

    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{display:'flex',width:'100%'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div>{user}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display:'flex',flex:1}}>{notification}</div>
            </div>
        </div>
    ) : (<div>{login}</div>);
}