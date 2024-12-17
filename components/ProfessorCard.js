import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ProfessorCard = () => {
  const [cardData, setCardData] = useState({
    name: '',
    ureNaTeden: '',
    maxZamuda: '',
    maxPodaljsanje: '',
    straniNaUro: '',
    tezavnostTestov: '',
    auraPoints: '3',
    superMoc: '',
    imageUrl: '/api/placeholder/200/200'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real implementation, you'd handle file upload to a server
      // For now, we'll use a placeholder
      setCardData(prev => ({
        ...prev,
        imageUrl: '/api/placeholder/200/200'
      }));
    }
  };

  const AuraPoints = ({ count }) => (
    <div className="flex gap-2 absolute top-2 right-2">
      {[...Array(parseInt(count) || 0)].map((_, i) => (
        <div key={i} className="w-4 h-4 rounded-full bg-black" />
      ))}
    </div>
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Card Creator</h2>
          <div>
            <Label htmlFor="name">Professor Name</Label>
            <Input
              id="name"
              name="name"
              value={cardData.name}
              onChange={handleInputChange}
              placeholder="ESTERA 1975"
            />
          </div>

          <div>
            <Label htmlFor="image">Professor Photo</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer"
            />
          </div>

          <div>
            <Label htmlFor="ureNaTeden">Ure/teden</Label>
            <Input
              id="ureNaTeden"
              name="ureNaTeden"
              value={cardData.ureNaTeden}
              onChange={handleInputChange}
              placeholder="2"
            />
          </div>

          <div>
            <Label htmlFor="maxZamuda">Max. zamuda (min)</Label>
            <Input
              id="maxZamuda"
              name="maxZamuda"
              value={cardData.maxZamuda}
              onChange={handleInputChange}
              placeholder="1"
            />
          </div>

          <div>
            <Label htmlFor="maxPodaljsanje">Max. podaljšanje (min)</Label>
            <Input
              id="maxPodaljsanje"
              name="maxPodaljsanje"
              value={cardData.maxPodaljsanje}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>

          <div>
            <Label htmlFor="straniNaUro">Strani (h)</Label>
            <Input
              id="straniNaUro"
              name="straniNaUro"
              value={cardData.straniNaUro}
              onChange={handleInputChange}
              placeholder="0.5"
            />
          </div>

          <div>
            <Label htmlFor="tezavnostTestov">Težavnost testov</Label>
            <Input
              id="tezavnostTestov"
              name="tezavnostTestov"
              value={cardData.tezavnostTestov}
              onChange={handleInputChange}
              placeholder="1"
            />
          </div>

          <div>
            <Label htmlFor="auraPoints">Aura Points (1-3)</Label>
            <Input
              id="auraPoints"
              name="auraPoints"
              type="number"
              min="1"
              max="3"
              value={cardData.auraPoints}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="superMoc">SUPERMOČ</Label>
            <Textarea
              id="superMoc"
              name="superMoc"
              value={cardData.superMoc}
              onChange={handleInputChange}
              placeholder="Uporabi ko se rabiš učit drug predmet med poukom."
              className="h-20"
            />
          </div>
        </div>

        {/* Card Preview */}
        <div>
          <h2 className="text-xl font-bold mb-4">Card Preview</h2>
          <div className="w-72 h-96 border-4 border-black rounded-lg relative bg-white overflow-hidden">
            {/* Title */}
            <div 
              className="text-xl font-bold p-4" 
              style={{ 
                fontFamily: 'Audiowide, cursive',
                borderBottom: '2px solid black'
              }}
            >
              {cardData.name || "ESTERA 1975"}
            </div>
            
            {/* Aura Points */}
            <AuraPoints count={cardData.auraPoints} />
            
            {/* Professor Image */}
            <div className="w-full h-32 border-b-2 border-black">
              <img 
                src={cardData.imageUrl} 
                alt="Professor" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="p-4 space-y-1 text-sm border-b-2 border-black">
              <div>ure/teden: {cardData.ureNaTeden || "2"}</div>
              <div>max. zamuda: {cardData.maxZamuda || "1"}min</div>
              <div>max. podaljšanje: {cardData.maxPodaljsanje || "0"}min</div>
              <div>strani (h): {cardData.straniNaUro || "0.5"}</div>
              <div>težavnost testov: {cardData.tezavnostTestov || "1"}</div>
            </div>

            {/* Supermoč */}
            <div className="p-4">
              <div className="font-bold">SUPERMOČ:</div>
              <div className="text-sm">
                {cardData.superMoc || "uporabi ko se rabiš učit drug predmet med poukom."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorCard;
