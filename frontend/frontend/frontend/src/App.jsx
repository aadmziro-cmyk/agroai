import React, { useState } from 'react'
import './App.css'

function App() {
  const [fields, setFields] = useState([
    {
      id: 1,
      name: "Поле #1 - Пшеница",
      area: 45.5,
      plants: 1247,
      health: "good",
      crop: "wheat"
    },
    {
      id: 2,
      name: "Поле #2 - Ячмень",
      area: 32.0,
      plants: 892,
      health: "warning",
      crop: "barley"
    },
    {
      id: 3,
      name: "Поле #3 - Лен",
      area: 28.5,
      plants: 1543,
      health: "good",
      crop: "flax"
    }
  ])

  const addTestField = () => {
    const newField = {
      id: fields.length + 1,
      name: `Поле #${fields.length + 1} - Тестовое`,
      area: Math.floor(Math.random() * 50) + 20,
      plants: Math.floor(Math.random() * 1000) + 500,
      health: Math.random() > 0.5 ? "good" : "warning",
      crop: "test"
    }
    setFields([...fields, newField])
  }

  const getHealthStatus = (health) => {
    switch(health) {
      case 'good': return '✅ Здоровое'
      case 'warning': return '⚠️ Требует внимания'
      case 'poor': return '❌ Проблемное'
      default: return '✅ Здоровое'
    }
  }

  const getCropIcon = (crop) => {
    switch(crop) {
      case 'wheat': return '🌾'
      case 'barley': return '🌾'
      case 'flax': return '🌿'
      default: return '🌱'
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🌾 AgroAI - Анализ сельхоз полей</h1>
        <p>Платформа для мониторинга и анализа полей с помощью AI</p>
      </header>

      <div className="container">
        <div className="sidebar">
          <h3>🛠️ Инструменты</h3>
          <button className="tool-btn">🎯 Рисовать поле</button>
          <button className="tool-btn">📊 Подсчет растений</button>
          <button className="tool-btn">🌿 Анализ сорняков</button>
          <button className="tool-btn">🏥 Диагностика болезней</button>
          <button className="tool-btn">📈 NDVI анализ</button>
          
          <div className="sidebar-section">
            <h4>📁 Быстрые действия</h4>
            <button className="action-btn" onClick={addTestField}>
              ➕ Добавить тестовое поле
            </button>
            <button className="action-btn">
              📤 Загрузить снимок
            </button>
            <button className="action-btn">
              📄 Сгенерировать отчет
            </button>
          </div>
        </div>

        <div className="main">
          <div className="map-placeholder">
            <h2>🗺️ Карта полей AgroAI</h2>
            <p>Интерактивная карта для мониторинга сельскохозяйственных угодий</p>
            
            <div className="map-stats">
              <div className="stat">
                <span className="stat-number">{fields.length}</span>
                <span className="stat-label">Всего полей</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {fields.reduce((sum, field) => sum + field.area, 0).toFixed(1)}
                </span>
                <span className="stat-label">Гектаров</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {fields.filter(f => f.health === 'good').length}
                </span>
                <span className="stat-label">Здоровых полей</span>
              </div>
            </div>

            <div className="demo-buttons">
              <button className="demo-btn primary" onClick={addTestField}>
                🎯 Добавить тестовое поле
              </button>
              <button className="demo-btn secondary">
                📡 Загрузить спутниковый снимок
              </button>
              <button className="demo-btn success">
                🤖 Запустить AI анализ
              </button>
            </div>

            <div className="map-notice">
              <p>🚀 <strong>Следующий шаг для команды фронтенд:</strong></p>
              <p>Добавить интерактивную карту с использованием React Leaflet</p>
            </div>
          </div>

          <div className="fields-list">
            <div className="section-header">
              <h3>📋 Мои поля</h3>
              <span className="field-count">{fields.length} полей</span>
            </div>
            
            {fields.map(field => (
              <div key={field.id} className={`field-card ${field.health}`}>
                <div className="field-header">
                  <span className="field-icon">{getCropIcon(field.crop)}</span>
                  <h4>{field.name}</h4>
                  <span className="field-health">{getHealthStatus(field.health)}</span>
                </div>
                <div className="field-details">
                  <div className="field-info">
                    <span>📍 Площадь: <strong>{field.area} га</strong></span>
                    <span>📊 Растений: <strong>{field.plants.toLocaleString()}</strong></span>
                    <span>🌿 Плотность: <strong>{(field.plants / field.area).toFixed(0)}/га</strong></span>
                  </div>
                  <div className="field-actions">
                    <button className="action-btn small">Анализировать</button>
                    <button className="action-btn small">Отчет</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
