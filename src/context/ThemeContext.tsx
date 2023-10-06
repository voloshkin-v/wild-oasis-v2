import { useState, useEffect, createContext, useContext } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
	defaultTheme?: Theme;
	storageKey?: string;
	children: React.ReactNode;
}

interface ThemeContextState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const initialState: ThemeContextState = {
	theme: 'system',
	setTheme: () => null,
};

const ThemeContext = createContext<ThemeContextState>(initialState);

export const ThemeProvider = ({
	defaultTheme = 'system',
	storageKey = 'theme',
	children,
	...props
}: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
	);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove('light', 'dark');
		root.classList.add('no-transition');

		if (theme === 'system') {
			const systemTheme = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches
				? 'dark'
				: 'light';

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);

		setTimeout(() => {
			root.classList.remove('no-transition');
		});
	}, [theme]);

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
		},
	};

	return (
		<ThemeContext.Provider {...props} value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
