import { Check } from "lucide-react"

const AuthImagePattern = ({title , subTitle, header1, f1, header2, f2, header3, f3, header4, f4, com}) => {
  return (
    <>
     {/* right side - community */}
     <div className="relative hidden lg:flex flex-col justify-center bg-gradient-to-br from-primary to-primary-focus text-primary-content p-12">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-12 left-12 size-32 rounded-full border-8 border-current"></div>
          <div className="absolute bottom-24 right-12 size-24 rounded-full border-8 border-current"></div>
          <div className="absolute top-1/2 right-1/3 size-16 rounded-full border-4 border-current"></div>
        </div>

        <div className="relative z-10 max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-primary-content/80 text-lg mb-8">
            {subTitle}
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-3">
              <div className="bg-primary-content/10 rounded-full p-1 mt-1">
                <Check className="size-5 text-primary-content" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{header1}</h3>
                <p className="text-primary-content/70">{f1}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary-content/10 rounded-full p-1 mt-1">
                <Check className="size-5 text-primary-content" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{header2}</h3>
                <p className="text-primary-content/70">{f2}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary-content/10 rounded-full p-1 mt-1">
                <Check className="size-5 text-primary-content" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{header3}</h3>
                <p className="text-primary-content/70">{f3}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-primary-content/10 rounded-full p-1 mt-1">
                <Check className="size-5 text-primary-content" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{header4}</h3>
                <p className="text-primary-content/70">{f4}</p>
              </div>
            </div>
          </div>

          <button className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary">
            {com}
          </button>
        </div>
      </div>
      {/* Mobile version of community section */}
      <div className=" block md:hidden bg-gradient-to-r from-primary to-primary-focus text-primary-content p-8 rounded-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-primary-content/80 mb-6">
            {subTitle}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <Check className="size-5 text-primary-content" />
              <span>{header1}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-5 text-primary-content" />
              <span>{header2}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-5 text-primary-content" />
              <span>{header3}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-5 text-primary-content" />
              <span>{header4}</span>
            </div>
          </div>

          <button className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary w-full">
            {com}
          </button>
        </div>
    </>
  )
}

export default AuthImagePattern