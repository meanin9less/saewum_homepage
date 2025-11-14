import { Routes, Route, useLocation } from "react-router-dom"
import { Header } from "./components/layout/Header"
import HomePage from "./components/pages/main/HomePage"
import CompanyPage from "./components/pages/company/CompanyPage"
import CEOPage from "./components/pages/company/CEOPage"
import HistoryPage from "./components/pages/company/HistoryPage"
import CertificationPage from "./components/pages/company/CertificationPage"
import OrganizationPage from "./components/pages/company/OrganizationPage"
import LocationPage from "./components/pages/company/LocationPage"
import NewsPage from "./components/pages/company/NewsPage"
import InnovationPage from "./components/pages/inovation/InnovationPage"
import ICLStoryPage from "./components/pages/inovation/ICLStoryPage"
import ContributionPage from "./components/pages/inovation/ContributionPage"
import AnytalkPage from "./components/pages/solution/AnytalkPage"
import OfficeONPage from "./components/pages/solution/OfficeONPage"
import Apt123Page from "./components/pages/solution/Apt123Page"
import JosaPage from "./components/pages/solution/JosaPage"
import ContactPage from "./components/pages/qna/ContactPage"
import { Footer } from "./components/layout/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/ceo" element={<CEOPage />} />
          <Route path="/company/history" element={<HistoryPage />} />
          <Route path="/company/certification" element={<CertificationPage />} />
          <Route path="/company/organization" element={<OrganizationPage />} />
          <Route path="/company/location" element={<LocationPage />} />
          <Route path="/company/news" element={<NewsPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/innovation/icl-story" element={<ICLStoryPage />} />
          <Route path="/innovation/contribution" element={<ContributionPage />} />
          <Route path="/solutions" element={<AnytalkPage />} />
          <Route path="/solutions/officeon" element={<OfficeONPage />} />
          <Route path="/solutions/apt123" element={<Apt123Page />} />
          <Route path="/solutions/josa" element={<JosaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    <Footer />
    </div>
  )
}

export default App
