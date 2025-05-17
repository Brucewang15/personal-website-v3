export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bruce Wang. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
