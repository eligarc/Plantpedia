import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useServerStyles } from '@ui/ssr'
import { UIProvider } from '@ui/Provider'
import { Provider as AuthProvider } from 'next-auth/client'
import '../ui/globals.css'
import { QueryProvider } from '@api/QueryProvider'

const NextApp = ({ Component, pageProps }: AppProps) => {
  useServerStyles()
  return (
    <AuthProvider session={pageProps.session}>
      <QueryProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </QueryProvider>
    </AuthProvider>
  )
}

export default appWithTranslation(NextApp)
