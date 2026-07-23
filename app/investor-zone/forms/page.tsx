'use client'

import * as React from 'react'
import { FileText, Download, Search, CheckCircle, HelpCircle } from 'lucide-react'
import { downloadPrefilledPDF } from '@/lib/pdf-utils'

// Distributor Profiles
const profiles = [
  {
    id: 'p1',
    name: 'Sam Investments (Profile 1)',
    arn: 'ARN-103065',
    euin: 'E130649',
    description: 'Sunil Masurkar'
  },
  {
    id: 'p2',
    name: 'Sam Investments (Profile 2)',
    arn: 'ARN-361161',
    euin: 'E689889',
    description: 'Sunil Masurkar'
  }
]

// AMC List with corresponding uploaded filenames
const amcList: {
  id: string
  name: string
  logoBg: string
  commonFile: string | null
  sipFile: string | null
}[] = [
  {
    id: 'axis',
    name: 'Axis Mutual Fund',
    logoBg: 'bg-rose-50 text-rose-700 border-rose-100',
    commonFile: 'Axis-Common-Application-Form-with-SIP.pdf',
    sipFile: 'Axis-Common-Application-Form-with-SIP.pdf'
  },
  {
    id: 'bandhan',
    name: 'Bandhan Mutual Fund',
    logoBg: 'bg-orange-50 text-orange-700 border-orange-100',
    commonFile: 'bandhan.app.sip.pdf',
    sipFile: 'bandhan.app.sip.pdf'
  },
  {
    id: 'boi',
    name: 'BOI Mutual Fund',
    logoBg: 'bg-blue-50 text-blue-700 border-blue-100',
    commonFile: 'BOI_ApplicationForm_0.pdf',
    sipFile: 'BOI-sip.pdf'
  },
  {
    id: 'edelweiss',
    name: 'Edelweiss Mutual Fund',
    logoBg: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    commonFile: 'Edelwess.common.Application form_0.pdf',
    sipFile: 'edelweiss.app.sip.pdf'
  },
  {
    id: 'hdfc',
    name: 'HDFC Mutual Fund',
    logoBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    commonFile: 'HDFC-Common-Application-Form.pdf',
    sipFile: 'hdfc.app.sip.pdf',
  },
  {
    id: 'icici',
    name: 'ICICI Prudential Mutual Fund',
    logoBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    commonFile: 'icici-app sip.pdf',
    sipFile: 'icici-app sip.pdf'
  },
  {
    id: 'invesco',
    name: 'Invesco Mutual Fund',
    logoBg: 'bg-purple-50 text-purple-700 border-purple-100',
    commonFile: 'invesco.app.sip.pdf',
    sipFile: 'invesco.app.sip.pdf'
  },
  {
    id: 'jm',
    name: 'JM Financial Mutual Fund',
    logoBg: 'bg-teal-50 text-teal-700 border-teal-100',
    commonFile: 'JM-Application Forms (2).pdf',
    sipFile: 'JM-Application Forms (2).pdf'
  },
  {
    id: 'kotak',
    name: 'Kotak Mutual Fund',
    logoBg: 'bg-amber-50 text-amber-700 border-amber-100',
    commonFile: 'Kotak-Common-Application-Form-with-SIP.pdf',
    sipFile: 'Kotak-Common-Application-Form-with-SIP.pdf'
  },
  {
    id: 'mirae',
    name: 'Mirae Asset Mutual Fund',
    logoBg: 'bg-sky-50 text-sky-700 border-sky-100',
    commonFile: 'mirae.app.sip.pdf',
    sipFile: 'mirae.app.sip.pdf'
  },
  {
    id: 'motilal',
    name: 'Motilal Oswal Mutual Fund',
    logoBg: 'bg-red-50 text-red-700 border-red-100',
    commonFile: 'Motilal--Application-Form.pdf',
    sipFile: 'Motilal-Common-Application-Form-with-SIP.pdf'
  },
  {
    id: 'nippon',
    name: 'Nippon India Mutual Fund',
    logoBg: 'bg-blue-50 text-[#0b4c8c] border-blue-100',
    commonFile: 'Nippon-app-SIP-FORM.pdf',
    sipFile: 'Nippon-app-SIP-FORM.pdf',
  },
  {
    id: 'sundaram',
    name: 'Sundaram Mutual Fund',
    logoBg: 'bg-yellow-50 text-yellow-800 border-yellow-100',
    commonFile: 'Sundaram-Common-Application-Form-with-SIP.pdf',
    sipFile: 'Sundaram-Common-Application-Form-with-SIP.pdf'
  },
  {
    id: 'whiteoak',
    name: 'WhiteOak Capital Mutual Fund',
    logoBg: 'bg-violet-50 text-violet-700 border-violet-100',
    commonFile: 'whiteoak.common_Application_Form_96f2378ffb.pdf',
    sipFile: 'whiteoak.sip.pdf'
  }
]

export default function FormsPage() {
  const [selectedProfileId, setSelectedProfileId] = React.useState('p1')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [downloadingFile, setDownloadingFile] = React.useState<string | null>(null)

  const activeProfile = profiles.find(p => p.id === selectedProfileId) || profiles[0]

  const filteredAmcs = amcList.filter(amc =>
    amc.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDownload = async (key: string, fileName: string, displayName: string) => {
    setDownloadingFile(key)
    try {
      await downloadPrefilledPDF(
        fileName,
        activeProfile.arn,
        activeProfile.euin,
        displayName
      )
    } finally {
      // Small timeout to give user feedback
      setTimeout(() => {
        setDownloadingFile(null)
      }, 500)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2d5e] to-[#1a6bbf] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <FileText className="w-4 h-4 text-blue-200" /> Forms Download Zone
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Application Forms</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Download transaction slips and SIP enrollment forms from major mutual fund houses with our distributor ARN & EUIN prefilled automatically.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-6 bg-gray-50 flex-1">
        <div className="max-w-5xl mx-auto">
          {/* Controls Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Distributor Profile Selector */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2d9d43]" /> Select Distributor Profile
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Select which partner profile you want prefilled on the forms:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profiles.map(profile => {
                    const isActive = profile.id === selectedProfileId
                    return (
                      <button
                        key={profile.id}
                        onClick={() => setSelectedProfileId(profile.id)}
                        className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'border-[#0b4c8c] bg-blue-50/50 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <span className={`text-xs font-semibold uppercase ${isActive ? 'text-[#0b4c8c]' : 'text-gray-400'}`}>
                          {profile.name}
                        </span>
                        <span className="text-sm font-bold text-gray-900 mt-1">
                          {profile.arn}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                          EUIN: {profile.euin}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Search and Guidelines */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Search className="w-5 h-5 text-gray-400" /> Search Mutual Fund
                  </h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search AMCs (e.g. Axis, HDFC)..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b4c8c]/20 focus:border-[#0b4c8c] bg-white text-gray-800 text-sm transition-all"
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div className="mt-5 p-3.5 bg-yellow-50/70 rounded-xl border border-yellow-100 flex items-start gap-2.5 text-xs text-amber-800">
                  <HelpCircle className="w-4.5 h-4.5 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">How it works:</span>
                    The PDF code overlays the selected ARN ({activeProfile.arn}) and EUIN ({activeProfile.euin}) codes directly into the PDF layout in real-time. No manual writing is required.
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* AMC Cards Grid */}
          {filteredAmcs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No mutual funds matching "{searchQuery}" found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAmcs.map(amc => (
                <div
                  key={amc.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base border shrink-0 ${amc.logoBg}`}>
                      {amc.name.split(' ')[0][0]}
                      {amc.name.split(' ')[1] ? amc.name.split(' ')[1][0] : ''}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-[15.5px] leading-snug">{amc.name}</h3>
                      <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">AMC Documents</span>
                    </div>
                  </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    {amc.commonFile === amc.sipFile ? (
                      /* Single Combined Form Button */
                      <button
                        onClick={() => handleDownload(`${amc.id}-combined`, amc.commonFile!, `${amc.name} Application & SIP Form`)}
                        disabled={downloadingFile !== null}
                        className="col-span-1 sm:col-span-2 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#0b4c8c]/5 hover:to-[#0b4c8c]/10 hover:text-[#0b4c8c] text-gray-700 text-xs font-semibold rounded-xl border border-gray-100 hover:border-[#0b4c8c]/20 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {downloadingFile === `${amc.id}-combined` ? (
                          <div className="w-4 h-4 border-2 border-[#0b4c8c] border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Download className="w-4 h-4" />
                        )}
                        <span>Application & SIP Form</span>
                      </button>
                    ) : (
                      <>
                        {/* Common Application Form */}
                        {amc.commonFile && (
                          <button
                            onClick={() => handleDownload(`${amc.id}-common`, amc.commonFile!, `${amc.name} Common Application Form`)}
                            disabled={downloadingFile !== null}
                            className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 hover:bg-[#0b4c8c]/5 hover:text-[#0b4c8c] text-gray-700 text-xs font-semibold rounded-xl border border-gray-100 hover:border-[#0b4c8c]/20 transition-all cursor-pointer disabled:opacity-50"
                          >
                            {downloadingFile === `${amc.id}-common` ? (
                              <div className="w-4 h-4 border-2 border-[#0b4c8c] border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <Download className="w-4 h-4" />
                            )}
                            <span>Common Application Form</span>
                          </button>
                        )}

                        {/* SIP Form */}
                        {amc.sipFile && (
                          <button
                            onClick={() => handleDownload(`${amc.id}-sip`, amc.sipFile!, `${amc.name} SIP Form`)}
                            disabled={downloadingFile !== null}
                            className="flex items-center justify-center gap-2 py-3 px-4 bg-[#2d9d43]/5 hover:bg-[#2d9d43]/10 text-[#2d9d43] hover:text-[#258537] text-xs font-bold rounded-xl border border-[#2d9d43]/10 hover:border-[#2d9d43]/20 transition-all cursor-pointer disabled:opacity-50"
                          >
                            {downloadingFile === `${amc.id}-sip` ? (
                              <div className="w-4 h-4 border-2 border-[#2d9d43] border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <Download className="w-4 h-4" />
                            )}
                            <span>SIP Form</span>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12 text-xs text-gray-400">
            * All transaction slips and forms are official versions sourced from the respective AMC websites. The prefilled distributor stamps are applied dynamically using your local browser environment.
          </div>
        </div>
      </section>
    </div>
  )
}
