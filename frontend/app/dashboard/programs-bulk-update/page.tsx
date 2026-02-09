'use client'

import { useState } from 'react'
import { DashboardNavbar } from '@/components/dashboard-navbar'
import { DashboardTopNavbar } from '@/components/dashboard-top-navbar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { Database, Settings2, Filter, Zap } from 'lucide-react'

// Dummy data - will be replaced with API calls
const dummyData = {
  schools: [
    { id: '1', name: 'School 1' },
    { id: '2', name: 'School 2' },
    { id: '3', name: 'School 3' },
    { id: '4', name: 'School 4' }
  ],
  degrees: [
    { id: '1', name: 'Bachelor' },
    { id: '2', name: 'Master' },
    { id: '3', name: 'PhD' },
    { id: '4', name: 'Diploma' }
  ],
  faculties: [
    { id: '1', name: 'Faculty 1' },
    { id: '2', name: 'Faculty 2' },
    { id: '3', name: 'Faculty 3' }
  ],
  specialities: [
    { id: '1', name: 'Speciality 1' },
    { id: '2', name: 'Speciality 2' },
    { id: '3', name: 'Speciality 3' },
    { id: '4', name: 'Speciality 4' }
  ],
  languages: [
    { id: '1', name: 'English' },
    { id: '2', name: 'French' },
    { id: '3', name: 'Spanish' },
    { id: '4', name: 'German' },
    { id: '5', name: 'Arabic' }
  ],
  actions: [
    { id: 'change_tuition_fee', name: 'Change Tuition Fee' },
    { id: 'change_application_status', name: 'Change Application Status' },
    { id: 'delete', name: 'Delete' },
    { id: 'change_commission_percentage', name: 'Change Commission Percentage' },
    { id: 'deactivate_in_search', name: 'Deactivate in Search' },
    { id: 'activate_in_search', name: 'Activate in Search' },
    { id: 'change_tuition_unit', name: 'Change Tuition Unit' }
  ]
}

export default function ProgramsBulkUpdatePage () {
  const [selectedSchool, setSelectedSchool] = useState('')
  const [selectedDegree, setSelectedDegree] = useState('')
  const [selectedFaculty, setSelectedFaculty] = useState('')
  const [selectedSpeciality, setSelectedSpeciality] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [selectedAction, setSelectedAction] = useState('')

  return (
    <div className="flex h-screen w-full">
      <DashboardNavbar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardTopNavbar />
        <main className="flex-1 overflow-y-auto bg-background">
          {/* Header Section */}
          <div className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-background via-background to-muted/20">
            <div className="relative container mx-auto px-6 py-12 md:px-8 md:py-16">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Database className="h-6 w-6" />
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    Programs Bulk Update
                  </h1>
                </div>
                <div className="mt-4 flex items-start gap-2.5">
                  <Settings2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground md:text-xl">
                    Select your filters below to update multiple programs at once
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="container mx-auto px-6 py-8 md:px-8 md:py-12">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-2xl border border-border/50 bg-card/50 p-8 shadow-lg backdrop-blur-sm md:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-2.5">
                    <Filter className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      Filter Options
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Choose from the options below to filter and update your programs
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Dropdown 1: School */}
                  <div className="group space-y-3">
                    <Label htmlFor="school" className="text-sm font-semibold text-foreground">
                      School
                    </Label>
                    <Select
                      value={selectedSchool}
                      onValueChange={setSelectedSchool}
                    >
                      <SelectTrigger id="school" className="h-11 bg-background transition-all hover:border-primary/50">
                        <SelectValue placeholder="Select a school" />
                      </SelectTrigger>
                      <SelectContent>
                        {dummyData.schools.map((school) => (
                          <SelectItem key={school.id} value={school.id}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dropdown 2: Degree */}
                  <div className="group space-y-3">
                    <Label htmlFor="degree" className="text-sm font-semibold text-foreground">
                      Degree
                    </Label>
                    <Select
                      value={selectedDegree}
                      onValueChange={setSelectedDegree}
                    >
                      <SelectTrigger id="degree" className="h-11 bg-background transition-all hover:border-primary/50">
                        <SelectValue placeholder="Select a degree" />
                      </SelectTrigger>
                      <SelectContent>
                        {dummyData.degrees.map((degree) => (
                          <SelectItem key={degree.id} value={degree.id}>
                            {degree.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dropdown 3: Faculty */}
                  <div className="group space-y-3">
                    <Label htmlFor="faculty" className="text-sm font-semibold text-foreground">
                      Faculty
                    </Label>
                    <Select
                      value={selectedFaculty}
                      onValueChange={setSelectedFaculty}
                    >
                      <SelectTrigger id="faculty" className="h-11 bg-background transition-all hover:border-primary/50">
                        <SelectValue placeholder="Select a faculty" />
                      </SelectTrigger>
                      <SelectContent>
                        {dummyData.faculties.map((faculty) => (
                          <SelectItem key={faculty.id} value={faculty.id}>
                            {faculty.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dropdown 4: Speciality */}
                  <div className="group space-y-3">
                    <Label htmlFor="speciality" className="text-sm font-semibold text-foreground">
                      Speciality
                    </Label>
                    <Select
                      value={selectedSpeciality}
                      onValueChange={setSelectedSpeciality}
                    >
                      <SelectTrigger id="speciality" className="h-11 bg-background transition-all hover:border-primary/50">
                        <SelectValue placeholder="Select a speciality" />
                      </SelectTrigger>
                      <SelectContent>
                        {dummyData.specialities.map((speciality) => (
                          <SelectItem key={speciality.id} value={speciality.id}>
                            {speciality.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dropdown 5: Language */}
                  <div className="group space-y-3">
                    <Label htmlFor="language" className="text-sm font-semibold text-foreground">
                      Language
                    </Label>
                    <Select
                      value={selectedLanguage}
                      onValueChange={setSelectedLanguage}
                    >
                      <SelectTrigger id="language" className="h-11 bg-background transition-all hover:border-primary/50">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        {dummyData.languages.map((language) => (
                          <SelectItem key={language.id} value={language.id}>
                            {language.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Action Selection Section */}
              <div className="mt-8 rounded-2xl border border-border/50 bg-card/50 p-8 shadow-lg backdrop-blur-sm md:p-10">
                <div className="mb-6">
                  <div className="flex items-center gap-2.5">
                    <Zap className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      What do you want to do with filtered programs?
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Select an action to apply to all programs matching your filters
                  </p>
                </div>
                <RadioGroup
                  value={selectedAction}
                  onValueChange={setSelectedAction}
                  className="grid w-full gap-4 md:grid-cols-3"
                >
                  {dummyData.actions.map((action) => (
                    <div key={action.id} className="w-full">
                      <label
                        htmlFor={action.id}
                        className={cn(
                          'flex w-full cursor-pointer items-center space-x-3 rounded-lg border bg-card p-4 transition-all hover:border-primary hover:bg-accent/50',
                          selectedAction === action.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border'
                        )}
                      >
                        <RadioGroupItem
                          value={action.id}
                          id={action.id}
                          className="mt-0 shrink-0"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">
                            {action.name}
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

