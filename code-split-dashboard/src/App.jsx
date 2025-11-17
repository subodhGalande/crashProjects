import React, { useState, useMemo, useCallback, Suspense } from "react";
import Nav from "./components/nav";
import Spinner from "./components/spinner";
import ErrorBoundary from "./components/errorBoundary";
import "./index.css";

const AnalyticsPanel = React.lazy(
  () => import("./components/Panels/analyticsPanel"),
);

const UserPanel = React.lazy(() => import("./components/Panels/userPanel"));
const SettingsPanel = React.lazy(
  () => import("./components/Panels/settingsPanel"),
);
function App() {
  const [active, setActive] = useState(null);

  const handleNav = useCallback((key) => setActive(key), []);

  //prefetching helper using dynamic import() - optional enhancement
  const prefetch = useMemo(
    () => ({
      analytics: () =>
        import(
          /* webpackChunkName: "analytics" */ "./components/Panels/analyticsPanel"
        ),
      users: () =>
        import(/* webpackChunkName: "users" */ "./components/Panels/userPanel"),
      settings: () =>
        import(
          /* webpackChunkName: "settings" */ "./components/Panels/settingsPanel"
        ),
    }),
    [],
  );

  return (
    <>
      <div className="app">
        <h1>Code-Splitting Dashboard</h1>
        <div className="layout">
          <Nav active={active} onChange={handleNav} />
          <div className="content">
            <ErrorBoundary>
              <Suspense fallback={<Spinner label="Loading panel..." />}>
                {active === "analytics" && <AnalyticsPanel />}
                {active === "users" && <UserPanel />}
                {active === "settings" && <SettingsPanel />}
                {!active && (
                  <div className="small-muted">
                    Select a panel to load it (code-split).
                  </div>
                )}
              </Suspense>
            </ErrorBoundary>
            <div style={{ marginTop: 12 }}>
              <div className="small-muted">
                Tip: hover a Nav button to prefetch chunk (demonstration)
              </div>
              <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                <button
                  onMouseEnter={() =>
                    prefetch
                      .analytics()
                      .then(() => console.log("analytics prefetched"))
                  }
                >
                  Prefetch Analytics
                </button>
                <button
                  onMouseEnter={() =>
                    prefetch.users().then(() => console.log("users prefetched"))
                  }
                >
                  Prefetch Users
                </button>
                <button
                  onMouseEnter={() =>
                    prefetch
                      .settings()
                      .then(() => console.log("settings prefetched"))
                  }
                >
                  Prefetch Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
