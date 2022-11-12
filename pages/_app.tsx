import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useServerStyles } from '@ui/ssr'
import { UIProvider } from '@ui/Provider'
import { Provider as AuthProvider } from 'next-auth/client'

import '../ui/globals.css'

const NextApp = ({ Component, pageProps }: AppProps) => {
  useServerStyles()
  return (
		<AuthProvider session={pageProps.session}>
				<UIProvider>
					<Component {...pageProps} />
				</UIProvider>
		</AuthProvider>
  )
}

export default appWithTranslation(NextApp)
