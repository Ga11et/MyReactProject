import React, {FC} from "react"
import { Preloader } from "../things/component/preloader/preloader"

export function withSuspense<WP>(Component: FC<WP>) {

    type propsType = {}

    const WrappedComponent: FC<propsType> = (props) => {
        return (
            <React.Suspense fallback={<Preloader />}>
                <Component {...props as WP} />
            </React.Suspense>
        )
    }

    return WrappedComponent
}

