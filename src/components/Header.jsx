import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ProductDropdown from './ProductDropdown'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (path) => {
    setIsMenuOpen(false)
    navigate(path)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'nav-glass shadow-lg' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" onClick={() => handleNavClick('/')}>
              <img 
                src="/img/final.png" 
                alt="Finamite Solutions" 
                className="h-12 md:h-16 w-auto logo-hover"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-secondary'
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  {item.name}
                </button>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  />
                )}
              </motion.div>
            ))}
            
            {/* Products Dropdown */}
            <ProductDropdown />
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`block w-full text-left px-4 py-2 font-medium transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-secondary bg-gray-50'
                          : 'text-primary hover:text-secondary hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                
                {/* Mobile Products Links */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary mb-2">Products</h3>
                  <div className="space-y-1 ml-4">
                    <button
                      onClick={() => handleNavClick('/products/task-management')}
                      className="block w-full text-left py-1 text-text-secondary hover:text-primary"
                    >
                      Task Management
                    </button>
                    <button
                      onClick={() => handleNavClick('/products/inventory-management')}
                      className="block w-full text-left py-1 text-text-secondary hover:text-primary"
                    >
                      Inventory Management
                    </button>
                    <button
                      onClick={() => handleNavClick('/products/lead-management')}
                      className="block w-full text-left py-1 text-text-secondary hover:text-primary"
                    >
                      Lead Management
                    </button>
                    <button
                      onClick={() => handleNavClick('/products/crm')}
                      className="block w-full text-left py-1 text-text-secondary hover:text-primary"
                    >
                      CRM Software
                    </button>
                    <button
                      onClick={() => handleNavClick('/products/hrms')}
                      className="block w-full text-left py-1 text-text-secondary hover:text-primary"
                    >
                      HRMS
                    </button>
                    <button
                      onClick={() => handleNavClick('/products/project-management')}
                      className="block w-full text-left py-1 text-text-secondary hover:text-primary"
                    >
                      Project Management
                    </button>
                    <button
                      onClick={() => handleNavClick('/products/ca-saas')}
                      className="block w-full text-left py-1 text-text-secondary hover:text-primary"
                    >
                      CA SaaS
                    </button>
                  </div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header