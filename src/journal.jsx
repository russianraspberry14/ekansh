import './journal.css'
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function Journal({onClose}) {
    const [entries, setEntries] = useState([])
    const [name, setName] = useState('')
    const [words, setWords] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        async function fetchEntries() {
          const { data, error } = await supabase
            .from('Guestbook')
            .select('*')
            .order('time', { ascending: false })
          
          if (error) console.error('Error fetching entries:', error)
          else setEntries(data)
        }
    
        fetchEntries()
      }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!name.trim() || !words.trim()) {
            alert('Please fill in both name and message')
            return
        }

        setIsSubmitting(true)

        try {
            const { data, error } = await supabase
                .from('Guestbook')
                .insert([
                    {
                        name: name.trim(),
                        words: words.trim(),
                        time: new Date().toISOString()
                    }
                ])
                .select()

            if (error) {
                console.error('Error adding entry:', error)
                alert('Failed to add entry. Please try again.')
            } else {
                // Add the new entry to the top of the list
                setEntries(prev => [data[0], ...prev])
                // Clear the form
                setName('')
                setWords('')
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Failed to add entry. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return(
        <div className="journal-box">
            <div className='header'>
                <button className="close-journal" onClick={onClose}>[X]</button>
                <h2>GuestBook!</h2>
            </div>
            
            {/* Add Entry Form */}
            <div className="add-entry-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                            maxLength={50}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Write your message..."
                            value={words}
                            onChange={(e) => setWords(e.target.value)}
                            disabled={isSubmitting}
                            maxLength={500}
                            rows={3}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={isSubmitting || !name.trim() || !words.trim()}
                    >
                        {isSubmitting ? 'Adding...' : 'Add Entry'}
                    </button>
                </form>
            </div>

            {/* Entries Display */}
            <div className="entries scrollable-entries">
                {entries.length === 0 ? (
                    <p className="no-entries">No entries yet. Be the first to sign the guestbook!</p>
                ) : (
                    entries.map(entry => (
                        <div key={entry.guest_num} className="entry">
                            <p><strong>{entry.name}</strong></p>
                            <p>{entry.words}</p>
                            <p className="timestamp">at {new Date(entry.time).toLocaleString()}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Journal