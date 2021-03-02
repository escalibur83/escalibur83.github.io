import './styles.scss'

export interface IMainProps {
	children: React.ReactNode
}

export const Main: React.FC<IMainProps> = ({ children }) => <main className="main">{children}</main>
