'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteTitle: 'WUBCS',
    siteDescription: 'World University of Bangladesh Computer Society',
    contactEmail: 'contact@wubcs.org',
    phone: '+880 1X XXX XXXXX',
    address: 'World University of Bangladesh',
    socialLinks: '',
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings')
      const result = await res.json()
      if (result.data) {
        setSettings(result.data)
      }
    } catch {
      console.log('Using default settings')
    }
  }

  const handleChange = (field: string, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })
      if (!res.ok) throw new Error('Failed')
      toast({ title: 'Success', description: 'Settings saved successfully' })
    } catch {
      toast({ title: 'Error', description: 'Failed to save settings', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6 ml-12 mb-12">
      <h1 className="text-3xl font-bold">Site Settings</h1>
      <div className="max-w-2xl text-black space-y-6 border border-border rounded-lg p-6 bg-card">
        <div>
          <label className="text-sm font-medium">Site Title</label>
          <Input
            value={settings.siteTitle}
            onChange={(e) => handleChange('siteTitle', e.target.value)}
            placeholder="Site title"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Site Description</label>
          <textarea
            value={settings.siteDescription}
            onChange={(e) => handleChange('siteDescription', e.target.value)}
            placeholder="Site description"
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm"
            rows={3}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Contact Email</label>
          <Input
            value={settings.contactEmail}
            onChange={(e) => handleChange('contactEmail', e.target.value)}
            placeholder="contact@example.com"
            type="email"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Phone</label>
          <Input
            value={settings.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="Phone number"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Address</label>
          <Input
            value={settings.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="Physical address"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Social Links</label>
          <textarea
            value={settings.socialLinks}
            onChange={(e) => handleChange('socialLinks', e.target.value)}
            placeholder="Enter social links as JSON"
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm font-mono text-xs"
            rows={4}
          />
        </div>
        <Button onClick={handleSave} disabled={loading}>
          {loading ? 'Saving...' : 'Save Settings'}
        </Button>
      </div>
    </div>
  )
}
